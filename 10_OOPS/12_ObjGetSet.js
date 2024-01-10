const language = {
  _founder: 'Guido van Rossum',
  _year: 1991,
  _paradigm: 'object-oriented',
  _name: 'Python',

  get name() {
    return this._name.toUpperCase();
  },

  set name(value) {
    this._name = value;
  },

  get founder() {
    return this._founder.toUpperCase();
  },

  set founder(data) {
    this._founder = data;
  },
};

// Factory function ( Object.create() ) to create a new object
const LangName = Object.create(language);  
console.log(LangName.name);

// Constructor function ( new ) to create a new object
const LangName2 = new Object(language);
console.log(LangName2._founder);

/* The reason the founder is not printed in uppercase in the above console.log is 
that the "get" accessor for "founder" returns the "_founder" property in uppercase, 
but we are directly accessing "_founder" in the second console.log (LangName2._founder), 
bypassing the getter. */