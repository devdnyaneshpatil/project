const { Service } = require("../../models");

const createService = async (payload) => {
  const service = await new Service(payload).save();
  return service;
};

const getAllServices = async (query, sort, skip, limit) => {
  const services = await Service.find(query).sort(sort).skip(skip).limit(limit);
  return {
    services,
    totalPages: limit > 0 ? Math.ceil(totalDocuments / limit) : 1,
  };
};

const getServicesByProviderId = async (providerId) => {
  const services = await Service.find({ userId: providerId });
  return services;
};

module.exports = { createService, getAllServices, getServicesByProviderId };
