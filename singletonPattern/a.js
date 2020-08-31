const logger = require('./singleton')

module.exports = function logFirstImplementation(){
    logger.printLogCount()
    logger.log('First File')
    logger.printLogCount()
}