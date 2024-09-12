const { Service } = require("../../models");

const createService = async (payload) => {
  const service = await new Service(payload).save();
  return service;
};

const getAllServices = async (query, sort,skip,limit) => {
  // Step 1: Count the total documents (grouped by userId)
  const totalDocumentsPipeline = [
    { $match: query }, // Same query filter
    { $group: { _id: "$userId" } }, // Group by userId
    { $count: "totalCount" } // Count the total number of groups
  ];

  const totalDocumentsResult = await Service.aggregate(totalDocumentsPipeline);
  const totalDocuments = totalDocumentsResult[0]?.totalCount || 0;

  const aggregationPipeline = [
    // Step 2: Match the query filter (e.g., category)
    { $match: query },

    // Step 3: Sort based on the sort options provided (or skip if no sort is provided)
    ...(Object.keys(sort).length ? [{ $sort: sort }] : []),

    // Step 4: Group the services by userId
    {
      $group: {
        _id: "$userId", // Group by userId
        services: {
          $push: {
            _id: "$_id",
            serviceName: "$serviceName",
            category: "$category",
            time: "$time",
            price: "$price",
            description: "$description",
            userId: "$userId"
          }
        }
      }
    },
    
    // Step 5: skip the grouped documents
    { $skip: skip },

    // Step 6: Apply limit to restrict the number of grouped documents returned
    ...(limit ? [{ $limit: limit }] : []),

    // Step 7: Lookup to populate the user information
    {
      $lookup: {
        from: "users", // Name of the user collection
        localField: "_id", // The field from the Service collection (_id is the userId after grouping)
        foreignField: "_id", // The field from the User collection (_id)
        as: "user" // Output field to store the populated user info
      }
    },

    // Step 6: Unwind the user array to get a single user object
    { $unwind: "$user" }
  ];

  const services = await Service.aggregate(aggregationPipeline);

  return {
    services, // Grouped services by userId, with the user populated
    totalPages:limit>0?(Math.ceil(totalDocuments/limit)):1,
  };
};



const getServicesByProviderId = async (providerId) => {
  const services = await Service.find({ userId: providerId });
  return services;
};

module.exports = { createService, getAllServices, getServicesByProviderId };
