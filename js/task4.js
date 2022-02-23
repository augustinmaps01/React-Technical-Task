const bem = {
        block: 'list',
        element:'item',
        modifier: 'active-link',
        build: function () {
            return this.block+this.eelemnt+this.modifier
        }
    }

if(bem.block == false) {
    console.log('Unable to find Block');

} 
const methodBem= bem.build()