import { useEffect, useState } from 'react';
import Client from '../core/Client';
import ClientRepository from '../core/ClientRepository';
import ClientCollection from '../firebase/db/ClientCollection';
import UseTableOrForm from './useTableOrForm';

export default function UseClients() {
    const repo: ClientRepository = new ClientCollection();

    const { visibleTable, displayTable, displayForm } =
        UseTableOrForm();

    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(getAll, []);

    function getAll() {
        repo.findAll().then((clients) => {
            setClients(clients);
            displayTable();
        });
    }

    function selectClient(client: Client) {
        setClient(client);
        displayForm();
    }

    async function deleteClient(client: Client) {
        await repo.delete(client);
        getAll();
    }

    async function saveClient(client: Client) {
        await repo.save(client);
        getAll();
    }

    function newClient() {
        setClient(Client.empty());
        displayForm();
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        deleteClient,
        selectClient,
        getAll,
        visibleTable,
        displayTable,
    };
}
