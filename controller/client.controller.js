const { Client } = require('../model/client.model');

const getAllClients = async (req, res) => {
    try {
		const clients = await Client.findAll();

		res.status(200).json({
			status: 'success',
			data: {
				clients,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const getOneClient = async (req, res) => {
    try {
        const { id } = req.params;

        const client = await Client.findOne({ where: { id } });

        if(!client){
            return res.status(404).json({
                status: 'error',
                message: 'Client not found'
            });
        }

    } catch (error) {
        console.log(error);
    }
};

const createClient = async (req, res) => {
	try {
		const { entranceTime } = req.body;

		const newEntranceTime = await Client.create({ entranceTime });

		res.status(201).json({
			status: 'success',
			data: { newEntranceTime },
		});
	} catch (error) {
		console.log(error);
	}
};

const updateClient = async (req, res) => {
	try {
		const { exitTime } = req.body;
		const { id } = req.params;

		const client = await Client.findOne({ where: { id } });

		if (!client) {
		return res.status(404).json({
			status: 'error',
			message: 'Client not found',
		});
		}

		await client.update({ exitTime });
        await client.update({ status: 'Out'});

		res.status(200).json({ 
			status: 'success', 
			data: { client },
		});
	} catch (error) {
		console.log(error);

	} 
};

const deleteClient = async (req, res) => {
	try{
		const { id } = req.params;

        const client = await Client.findOne({ where: { id } });

		if (!client) {
        return res.status(404).json({
            status: 'error',
            message: 'Client not found',
        });
        }

		await client.update({ status: 'Cancelled'});

		res.status(204).json({ status: 'success'});

	} catch (error) {
		console.log(error);
	}
};


module.exports = {
    getAllClients,
    getOneClient,
    createClient,
	updateClient,
	deleteClient,
};