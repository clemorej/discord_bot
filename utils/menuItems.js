const {xmldata} = require('./xmlReader')

var data = [];

xmldata.then((result) => {
    data = result.items
    console.log(data)
}).catch((err) => {
    console.log(err)
})

class MenuItems {
    constructor(id) {
        this.id = id
        this.label = 'FAQ'
        this.items = []

        this.getCategories(data)

    }

    getCategories(data){
        if(this.id == null){
            if (data.hasOwnProperty('category')){
                data.category.forEach((category) => {
                    this.items.push({label: category.name, value: category.id})
                })
            }
            if (data.hasOwnProperty('question')){
                this.getQuestions(data)
            }
        } else {
            if(data.category.length > 0) {
                for (const category of data.category) {
                    if (this.id === category.id) {
                        this.label = category.name
                        if(category.hasOwnProperty('category')) {
                            this.items.push(category.category.map((item) => {
                                return {label: item.name, value: item.id}
                            }))
                        } else {
                            this.getQuestions(category)
                        }
                        break;
                    } else if(category.hasOwnProperty('category')) {
                        this.getCategories(category)
                    }
                }
            }
        }
    }

    getQuestions(data){
        if(data.question.length > 0) {
            data.question.forEach((question) => {
                this.items.push({label: question.$t, value: question.id + "::" + question.$t + "::" + question.answer})
            })
        }
    }

}

module.exports = MenuItems;
