import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {
    const clients = [
        new Client('Ana', 34, '1'),
        new Client('Bia', 45, '2'),
        new Client('Carlos', 23, '3'),
        new Client('Pedro', 44, '4'),
    ];

    function selectedClient(client: Client) {
        console.log(client.name);
    }
    function deletedClient(client: Client) {
        console.log(`deleting ... ${client.name}`);
    }

    return (
        <div
            className={`
              flex justify-center items-center h-screen
              bg-gradient-to-r from-blue-500 to-purple-500
              text-white
        `}
        >
            <Layout title="Simple Registration">
                <div className="flex justify-end">
                    <Button color="green" className="mb-4">
                        New Client
                    </Button>
                </div>
                <Table
                    clients={clients}
                    selectedClient={selectedClient}
                    deletedClient={deletedClient}
                />
                <Form client={clients[2]}></Form>
            </Layout>
        </div>
    );
}
