class HashMap {
  constructor(size = 100) {
    this.size = size;
    this.buckets = new Array(size);

    for (let i = 0; i < size; i++) {
      this.buckets[i] = [];
    }
  }

  myHash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCode(i);
    }

    return hash % this.size;
  }

  put(key, value) {
    const index = this.myHash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const index = this.myHash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  delete(key) {
    const index = this.myHash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.slice(i, 1);
        return true;
      }
    }

    return false;
  }

  print() {
    console.log(this.buckets);
  }
}
