import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        // ? Unique Identifier for Authentication
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },

        // ? Session Token (Single Valid Session Permently Stored only updated on Login)
        session: { type: String },

        // ? Activity info
        lastLogin: { type: Date, default: Date.now },
        createdAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
