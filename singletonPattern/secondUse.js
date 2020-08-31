const FancyLogger = require('./script')
const logger = new FancyLogger()

module.exports = function logSecondImplementation() {
    logger.printLogCount()
    logger.log('Second File')
    logger.printLogCount()
}