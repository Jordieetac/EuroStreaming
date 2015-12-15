/**
 * Created by Jordi on 15/12/2015.
 */
exports = module.exports = function(app, mongoose) {

    var userSchema = new mongoose.Schema({
        name: 		{ type: String },
        dni: 		{ type: String },
        hasvoted: [{type: Boolean}]
    });

    mongoose.model('userSchema', studentSchema);
};