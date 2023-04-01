class LocalStorage {
  datum = []

  addData(message, sender) {
    this.datum.push({
      message,
      sender,
      createdAt: new Date().toLocaleString(),
    });
  }

  // getter methods
  getData() {
    return this.datum;
  }
}

module.exports = LocalStorage;
