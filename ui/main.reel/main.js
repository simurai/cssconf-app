/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    _chip: {
        value: null
    },
    
    _badge: {
        value: null
    },
    
    _chipColor: {
        value: 0
    },
    
    chipColor: {
        set: function(value) {
            this._chipColor = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._chipColor;
        }
    },
    
    handleSearchAction: {
        value: function(event) {
            this.classList.add("is-team");
            this._badge.value = 5;
        }
    },
        
    draw: {
        value: function() {
            var hue = Math.round(this._chipColor);
            var color = "hsl(" + hue + ",80%,60%)";
            
            //this._chip.style.color = color;
            //this._chip.style.fill = color;
        }
    }
    
});
