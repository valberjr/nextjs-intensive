import Client from '../core/Client';
import { EditIcon, TrashIcon } from './Icons';

interface TableProps {
  clients: Client[];
  selectedClient?: (Client) => void;
  deletedClient?: (Client) => void;
}

export default function Table(props: TableProps) {
  const displayActions = props.deletedClient || props.selectedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Id</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {displayActions ? <th className="p-4">Actions</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {displayActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.selectedClient ? (
          <button
            className={`
        flex justify-center items-center
        text-green-600 rounded-full p-2 m-1
        hover:bg-purple-50
        `}
            onClick={() => props.selectedClient?.(client)}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}

        {props.deletedClient ? (
          <button
            onClick={() => props.deletedClient?.(client)}
            className={`
        flex justify-center items-center
        text-red-500 rounded-full p-2 m-1
        hover:bg-purple-50
        `}
          >
            {TrashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        text-gray-100
        bg-gradient-to-r from purple-500 to-purple-800
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
