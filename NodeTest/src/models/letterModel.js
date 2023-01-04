import mongoose from "mongoose";

const letterSchema = new mongoose.Schema({
	para: {
		type: String,
		trim: false,
	},
	asunto: {
		type: String,
		trim: false,
	}
});

export default mongoose.model("Letter", letterSchema);
