var names = new Array();
names[0] = "Yaakov";
names[1] = "Jims";
names[2] = "Jack";
names[3] = "joe";
names[4] = "jacob";
names[5] = "mighan";
names[6] = "mattew";
names[7] = "chris";
names[8] = "charlotte";
names[9] = "harry";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) ==='J' || names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else {
        console.log("Hello "+ names[i])
    }
}