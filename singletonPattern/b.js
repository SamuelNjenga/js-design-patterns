const logger = require('./singleton')

module.exports = function logSecondImplementation(){
    logger.printLogCount()
    logger.log('Second File')
    logger.printLogCount()
}