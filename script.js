var app = new Vue({
  el: "#app",
  data: {
    decNum: "",
    binNum: "",
	aNum: "",
	bNum: "",
	cNum: "",
    octalNum: "",
    hexNum: "",
    currInput: ""
  },
  watch: {
    decNum: function(d) {
      if (this.currInput !== "bin") this.binNum = this.decToOther(d, 2);
	  if (this.currInput !== "a") this.aNum = this.decToOther(d, 4);
	  if (this.currInput !== "b") this.bNum = this.decToOther(d, 6);
      if (this.currInput !== "octal") this.octalNum = this.decToOther(d, 8);
	  if (this.currInput !== "c") this.cNum = this.decToOther(d, 12);
      if (this.currInput !== "hex") this.hexNum = this.decToOther(d, 16);
    },
    binNum: function(b) {
      if (this.currInput !== "dec") 
        this.decNum = this.parseToDec(b, 2);
    },
    octalNum: function(o) {
      if (this.currInput !== "dec") 
        this.decNum = this.parseToDec(o, 8);
    },
	aNum: function(a) {
      if (this.currInput !== "dec") 
        this.decNum = this.parseToDec(a, 4);
    },
	bNum: function(b) {
      if (this.currInput !== "dec") 
        this.decNum = this.parseToDec(b, 6);
    },
	cNum: function(c) {
      if (this.currInput !== "dec") 
        this.decNum = this.parseToDec(c, 12);
    },
    hexNum: function(h) {
      if (this.currInput !== "dec") 
        this.decNum = this.parseToDec(h, 16);
    }
  },
  methods: {
    isEmpty: function(n) {
      if (!n) return true;
      var s = n.toString();
      return s.length === 0 || !s.trim();
    },
    decToOther: function(num, radix) {
      if (this.isEmpty(num)) return "";
      return Number(num).toString(radix);
    },
    parseToDec: function(num, radix) {
      if (this.isEmpty(num)) return "";
      return this.parseFloat(num, radix);
    },
    parseFloat: function(str, radix) {
      var parts = str.split(".");
      var intPart = parseInt(parts[0], radix);
      if (parts.length > 1) {
        var floatPart =
          parseInt(parts[1], radix) / Math.pow(radix, parts[1].length);
        return intPart > 0 ? intPart + floatPart : intPart - floatPart;
      }
      return intPart;
    },
    clear: function() {
      this.decNum = "";
      this.binNum = "";
	  this.aNum = "";
	  this.bNum = "";
	  this.cNum = "";
      this.octalNum = "";
      this.hexNum = "";
    }
  }
});