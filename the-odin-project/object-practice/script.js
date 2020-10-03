const Person = (name, birthYear) => {
    let bYear = new Date();
    bYear.setFullYear(birthYear);

    let now = new Date();

    //private
    const leftToLive = () => 
        Number(bYear.getFullYear()) + 75 - (Number(now.getFullYear()));

    //private
    const capitalizeName = () => 
        name.toUpperCase();
    
    //public because of return statement
    const phrase = ()  =>
       console.log(
           "Hello " + capitalizeName()+ ", " + "you have " + leftToLive() + " years left to live"
       );
    
    return { phrase };
}

leetie = Person("leetie", 1993);

leetie.phrase();