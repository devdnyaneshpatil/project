const serviceContext = require("../db/context/service.context");
const createServiceController = async (req, res, next) => {
  try {
    req.body.userId = req.user._id;
    const service = serviceContext.createService(req.body);
    return res.status(201).json({ msg: "Service added successfully" });
  } catch (error) {
    return next(error);
  }
};

// this route is for getting all the service with pagination , sorting , filtering
const getAllServicesController = async (req, res, next) => {
  const { page = 1, limit = 0, sort, order, category } = req.query;
  try {
    const filter = {};
    if (category) {
      filter.category = category;
    }
    const sortOptions = {};
    if (sort && order) {
      sortOptions[sort] = order === "desc" ? -1 : 1;
    }
    const skip = (page - 1) * limit;
    const services = await serviceContext.getAllServices(
      filter,
      sortOptions,
      skip,
      limit
    );
    return res.status(200).json({ data: services });
  } catch (error) {
    return next(error);
  }
};

// this route is for perticular serviceproviders services
const getServicesController = async (req, res, next) => {
  const serviceProviderId = req.params.id;
  try {
    const services = await serviceContext.getServicesByProviderId(
      serviceProviderId
    );
    return res.status(200).json({ data: services });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createServiceController,
  getAllServicesController,
  getServicesController,
};
