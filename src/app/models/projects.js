import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [
    {
      fileName: { type: String },
      fileUrl: { type: String },
    },
  ],
});

const Projects =
  mongoose.models.Projects || mongoose.model('Projects', ProjectSchema);

export default Projects;
