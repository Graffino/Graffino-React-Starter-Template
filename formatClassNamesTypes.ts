module.exports = (dts) => {
  const modifiedDts = dts.replace(/--/g, '_modifier_').replace(/-/g, '_');
  return modifiedDts;
};
