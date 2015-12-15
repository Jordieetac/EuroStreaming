/**
 * Created by Jordi on 15/12/2015.
 */
exports = module.exports = function(app, mongoose) {

    var countrySchema = new mongoose.Schema({
        name: 		{ type: String },
        code: 		{ type: Number },
        votes: { type: Number }
    });

    mongoose.model('countrySchema', teacherSchema);
};
