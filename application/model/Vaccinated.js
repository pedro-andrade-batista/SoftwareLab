class Vaccinated {
    _id;
    _fullname;
    _birthDate;
    _susCard;
    _shotFirst;
    _shotSecond;

    constructor(fullname, birthDate, susCard, shotFirst, shotSecond){
        this._fullname = fullname;
        this._birthDate = birthDate;
        this._susCard = susCard;
        this._shotFirst = shotFirst;
        this._shotSecond = shotSecond;
    }

    setId(id){
        this._id = id;
    }
    getId(){
        return this._id;
    }

    setFullname(fullname){
        this._fullname = fullname;
    }
    getFullname(){
        return this._fullname;
    }

    setBirthDate(birthDate){
        this._birthDate = birthDate;
    }
    getBirthDate(){
        return this._birthDate;
    }

    setSusCard(susCard){
        this._susCard = susCard;
    }
    getSusCard(){
        return this._susCard;
    }

    setShotFirst(shotFirst){
        this._shotFirst = shotFirst;
    }
    getShotFirst(){
        return this._shotFirst;
    }

    setShotSecond(shotSecond){
        this._shotSecond = shotSecond;
    }
    getShotSecond(){
        return this._shotSecond;
    }

}