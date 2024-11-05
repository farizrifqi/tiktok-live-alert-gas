// utils.gs
class Logger {
  static log(message, error = null) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    if (error) {
      console.error(logMessage, error);
    } else {
      console.log(logMessage);
    }
  }
}

class PropertyManager {
  static get(key) {
    return PropertiesService.getScriptProperties().getProperty(key);
  }

  static set(key, value) {
    PropertiesService.getScriptProperties().setProperty(key, value);
  }

  static setMultiple(properties) {
    PropertiesService.getScriptProperties().setProperties(properties);
  }
}
