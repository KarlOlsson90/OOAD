class Corporation {
    constructor({company_Name, company_OfficeNo, company_SSNo}){
        this.company_Name = company_Name
        this.company_OfficeNo = company_OfficeNo
        this.company_SSNo = company_SSNo
        this.company_Id = Math.floor(Math.random() * Math.floor(1000000000))
    }
}

class Person {
    constructor({person_Name, person_Numbers, person_Mails, person_BelongsToCorp}){
        this.person_Name = person_Name
        this.person_Numbers = person_Numbers
        this.person_Mails = person_Mails
        this.person_BelongsToCorp = person_BelongsToCorp || ""
        this.person_Id = Math.floor(Math.random() * Math.floor(1000000000))
    }
}

class LogItem {
    constructor({user, activity, id}){
        this.user = user
        this.activity = activity
        this.id = id
    }
}

class AddLogItem {
    
    addLogItem(input = {}){
        console.log(input)
        return new LogItem(input)
    }
}

class AddContact {

    addContact(input = {}){

        switch (input.contactType) {
            case 'Person':
                this.contactType = Person
                break
            case 'Corporation':
                this.contactType = Corporation
                break
        }
        return new this.contactType(input)
    }

}
class connectPersonCorp {

    connectPersonToCorp(person, company){
        person.person_BelongsToCorp = company.company_Id
    }
    
}

function runProgram(user){

    console.log("Programmet körs!")
    
    const contactCreator = new AddContact();
    const contactConnector = new connectPersonCorp();
    const logCreator = new AddLogItem();

    const contact1 = contactCreator.addContact({
        contactType: 'Person',
        person_Name: 'Pelle',
        person_Numbers: ['12345', '456789'],
        person_Mails: ['pelle@mailen.se']
    })
    console.log("--------------------------------------------------------------------")
    console.log("Lade till kontakt 1: ", contact1)

    const log1 = logCreator.addLogItem({
        user: user, 
        activity: "create", 
        id: contact1.person_Id
    })
    console.log("--------------------------------------------------------------------")
    console.log("Lade till en loggning: ", log1)

    const contact2 = contactCreator.addContact({
        contactType: 'Corporation',
        company_Name: 'Företaget AB',
        company_OfficeNo: ['08-123 456'],
        company_SSNo: ['5512345678']
    })
    console.log("--------------------------------------------------------------------")
    console.log("Lade till kontakt 2: ", contact2)

    const log2 = logCreator.addLogItem({
        user: user, 
        activity: "create", 
        id: contact2.company_Id
    })

    console.log("--------------------------------------------------------------------")
    console.log("Lade till en loggning: ", log2)
    contactConnector.connectPersonToCorp(contact1, contact2)
    console.log("--------------------------------------------------------------------")
    console.log("Kopplade ihop kontakt 1 och kontakt 3: ", contact1)


}


runProgram("Karl")