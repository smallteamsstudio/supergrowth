import mongoose from 'mongoose'

const projectsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 25
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120
        },
        coverImage: {
            type: Buffer
        },
        tags: [{
            type: String
        }],
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true
        },
        liveUrl: {
            type: String
        },
        githubUrl: {
            type: String
        },
        story: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

/* It's a compound index that sets the project name to be unique within user's own scope.
   In other words, duplicate project name is not allowed in user's own profile. 

   The 1 is just the sorting order it tell in what order do you want to sort this fields on the index itself.

   And the order of the indexes matter. If we change the order it changes the behaviour.
   Generally, objects don't have order but this weird behaviour is because, Mongoose uses something called BSON
   where order matters.
*/
projectsSchema.index({ user: 1, name: 1 }, { unique: true })

export const Projects = mongoose.model('projects', projectsSchema)