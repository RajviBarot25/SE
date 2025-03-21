import "./Cards.css"

const Cards = ({ lastPurchasedItems, recentHistory }) => {
  return (
    <div className="cards-container">
      <div className="card last-purchased">
        <h2>Last Purchased Items</h2>
        <div className="card-content">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Hospital</th>
              </tr>
            </thead>
            <tbody>
              {lastPurchasedItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.date}</td>
                  <td>{item.hospital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card recent-history">
        <h2>Recent History</h2>
        <div className="card-content">
          {recentHistory.map((item) => (
            <div key={item.id} className="history-item">
              <div className="history-header">
                <span className="history-action">{item.action}</span>
                <span className="history-date">{item.date}</span>
              </div>
              <p className="history-details">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards

