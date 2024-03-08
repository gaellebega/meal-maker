const menu = {
    _meal : '',
    _price : 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck){
        if (typeof priceToCheck === 'number'){
            return this._price = priceToCheck;
        }
    },
get todaysSpecial(){
    if (this._meal && this._price){
        console.log('todays Special is Spaghetti');
    }
        else {
        console.log('Meal or price was not set correctly!')
    }
}
};


menu._meal = 'Pizza';
menu._price = 49;
console.log(menu);
console.log(menu.todaysSpecial);

