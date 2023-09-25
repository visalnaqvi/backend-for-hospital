import mongoose from "mongoose";


//Patient Schema
const patientsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                const phoneNumberRegex = /^\+91\d{10}$/;
                return phoneNumberRegex.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
});

const Patients = mongoose.model("Patients", patientsSchema);

export default Patients;
