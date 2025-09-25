import { getGroups } from '@/utils';

export default function Page() {
  const groups = getGroups();
  return (
    <div className="flex flex-col h-screen bg-yellow-50 w-full">
      <h1 className="text-center text-4xl box-border p-2 font-bold bg-yellow-200 border-b-yellow-700 border-b-4">
        World Cup 2026 Simulator
      </h1>
      <div className="p-4 overflow-y-auto box-border">
        <div className="flex flex-wrap w-full gap-3">
          {Object.entries(groups).map(([groupName, teams]) => (
            <div
              key={groupName}
              className="flex flex-col gap-1 w-1/7 border-2 border-b-yellow-700 p-3 box-border"
            >
              <h2 className="text-xl font-bold">{`Group ${groupName}`}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>GD</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map(team => (
                    <tr key={team}>
                      <td>{team}</td>
                      <td className="text-right">0</td>
                      <td className="text-right">0</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
