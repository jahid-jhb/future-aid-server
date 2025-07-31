require('dotenv').config();
const express = require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require("jsonwebtoken");
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
});

// Middleware: Verify JWT from Authorization header
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).send({ message: 'Forbidden' });
        req.user = decoded;
        next();
    });
};


async function run() {
    try {
        const db = client.db("futureaid");
        const users = db.collection("users");
        const scholarships = db.collection("scholarships");
        const applications = db.collection("applications");
        const reviews = db.collection("reviews");

        // JWT Login - return token
        app.post('/jwt', async (req, res) => {
            const { email } = req.body;
            const user = await users.findOne({ email });
            if (!user) return res.status(404).send({ message: 'User not found' });

            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });
            res.send({ token });
        });

        // USER: Register or update user
        app.post('/users', async (req, res) => {
            const userInfo = req.body;

            const isUserExist = await users.findOne({ email: userInfo.email });

            if (isUserExist) {
                return res.send('user already exist');
            }
            const result = await users.insertOne(userInfo);
            res.send(result);
        });



        // console.log("FutureAid server is ready!");
        await client.db("admin").command({ ping: 1 });
        // console.log("Connected to MongoDB!");
    } finally {
        // keep connection open
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('FutureAid Server is running');
    // console.log('initialized');
});

app.listen(port, () => {
    // console.log(`Server listening at http://localhost:${port}`);
});
