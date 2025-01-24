import mongoose from 'mongoose';

const FeaturesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [
    {
      fileName: { type: String },
      fileUrl: { type: String },
    },
  ],
});

const Features =
  mongoose.models.Features || mongoose.model('Features', FeaturesSchema);

export default Features;
