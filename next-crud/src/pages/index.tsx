import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import ClientRepository from '../core/ClientRepository';
import ClientCollection from '../firebase/db/ClientCollection';

export default function Home() {
    const repo: ClientRepository = new ClientCollection();

    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);
    const [visible, setVisible] = useState<'table' | 'form'>('table');

    useEffect(getAll, []);

    function getAll() {
        repo.findAll().then((clients) => {
            setClients(clients);
            setVisible('table');
        });
    }

    function selectedClient(client: Client) {
        setClient(client);
        setVisible('form');
    }

    async function deletedClient(client: Client) {
        await repo.delete(client);
        getAll();
    }

    async function saveClient(client: Client) {
        await repo.save(client);
        getAll();
    }

    function newClient() {
        setClient(Client.empty());
        setVisible('form');
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
                {visible === 'table' ? (
                    <>
                        <div className="flex justify-end">
                            <Button
                                color="green"
                                className="mb-4"
                                onClick={newClient}
                            >
                                New Client
                            </Button>
                        </div>
                        <Table
                            clients={clients}
                            selectedClient={selectedClient}
                            deletedClient={deletedClient}
                        />
                    </>
                ) : (
                    <Form
                        client={client}
                        clientChanged={saveClient}
                        cancelled={() => setVisible('table')}
                    />
                )}
            </Layout>
        </div>
    );
}
