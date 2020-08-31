const FancyLogger = require('./script')
const logger = new FancyLogger()

module.exports = function logFirstImplementation(){
    logger.printLogCount()
    logger.log('First File')
    logger.printLogCount()
}