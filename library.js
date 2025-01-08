(function(window) {

    const find = (id) => {
        console.log(id.charAt(0))
        if (id.charAt(0) === ".") {
            return document.getElementsByClassName(id.slice(1))
        } else if (id.charAt(0) === "#") {

            return document.getElementById(id.slice(1))
        } 
    }

    const findAll = (id) => {
        return document.querySelectorAll(id)
    }
    const create = (tagName, ...attributeStrings) => {
        const newElement = document.createElement(tagName);
        
        attributeStrings.forEach(attrString => {
            const atty = attrString.replaceAll(" ", "")
            const attr = atty.split("=");
            if (attr.length === 2) {
                newElement.setAttribute(attr[0], attr[1]);
            }
        })

        return newElement;
    }
    HTMLElement.prototype.clone = function() {
        return this.cloneNode()
    }
    HTMLElement.prototype.setContent = function(item) {
        return this.textContent = item
    }
    HTMLElement.prototype.getContent = function() {
        return this.textContent
    }
    HTMLElement.prototype.onEvent = function(event, handler) {
        return this.addEventListener(event, handler)
    }
    HTMLElement.prototype.offEvent = function(event, handler) {
        return this.removeEventListener(event, handler)
    }
    HTMLElement.prototype.deleteSelf = function() {
        return parentNode.removeChild(this)
    }
    HTMLElement.prototype.resetEvents = function() {
        const newElem = this.cloneNode(true)
        this.parentNode.replaceChild(newElem, this)
        return newElem
    }
    HTMLElement.prototype.removeAllChild = function() {
        while (this.firstChild) {
            this.removeChild(this.firstChild)
        }
    }
    HTMLElement.prototype.css = function(item, val) {
        return this.style[item] = val
    }

    HTMLElement.prototype.addChild =  function(item) {
        return this.appendChild(item)
    }
    HTMLElement.prototype.removeChild = function(item) {
        return this.removeChild(item)
    }

    HTMLElement.prototype.addClass = function(id) {
        return this.classList.add(id) 
    }
    HTMLElement.prototype.setClass = function(val) {
        return this.className = val
    }
    HTMLElement.prototype.getClass = function() {
        return this.className
    }
    HTMLElement.prototype.removeClass = function(id) {
        return this.classList.remove(id)
    }
    HTMLElement.prototype.setAttr = function(val, attr) {
        return this.setAttribute(attr, val)
    }
    HTMLElement.prototype.getAttr = function(attr) {
        return this.getAttribute(attr)
    }
    HTMLElement.prototype.removeAttr = function(attr) {
        return this.removeAttribute(attr)
    }
    
    window.find = find
    window.findAll = findAll
    window.create = create
})(window);