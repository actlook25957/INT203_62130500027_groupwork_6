const constraints = {
    username: {
        presence: true,
    },
    password: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 120
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    chosenlangs: {
        presence: true
    }
}

const app =Vue.createApp({
    data() {
        return {
            image: "./images/L.jpg",
            firstname : 'Traitawat',
            lastname : "Jitchana",
            username: null,
            password: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            chosenlangs: null,
            langs_lists: [{langs_id: 1, langs_name:'English'},
                            {langs_id: 2, langs_name: 'Thai'},
                            {langs_id: 3, langs_name: 'Spainish'}],
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({username: this.username,
                                    password: this.password,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    chosenlangs: this.chosenlangs},
                                    constraints)
            if(!this.errors){
                alert("Your proﬁle is updated successfully.")
            }
        }
    }
})

app.mount('#app')