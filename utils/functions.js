const isInvalidId = (id) => {
  return Number.isNaN(parseInt(id, 10));
};

export { isInvalidId }