import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import "./Racks.css"

const Racks = () => {
  // Sample data - in a real app, this would come from an API or database
  const [racks, setRacks] = useState([
    {
      id: 1,
      name: "Rack A-1",
      location: "Central Hospital - Operating Room 1",
      description: "Primary surgical supplies",
      totalBins: 8,
      status: "Active",
      bins: [
        { id: 1, name: "Bin 1", status: "In Stock", items: 12 },
        { id: 2, name: "Bin 2", status: "In Stock", items: 8 },
        { id: 3, name: "Bin 3", status: "Low Stock", items: 3 },
      ],
    },
    {
      id: 2,
      name: "Rack A-2",
      location: "Central Hospital - Operating Room 2",
      description: "Secondary surgical supplies",
      totalBins: 6,
      status: "Active",
      bins: [
        { id: 1, name: "Bin 1", status: "In Stock", items: 10 },
        { id: 2, name: "Bin 2", status: "In Stock", items: 7 },
      ],
    },
    {
      id: 3,
      name: "Rack B-1",
      location: "Memorial Medical Center - Operating Room A",
      description: "Emergency supplies",
      totalBins: 10,
      status: "Active",
      bins: [
        { id: 1, name: "Bin 1", status: "In Stock", items: 15 },
        { id: 2, name: "Bin 2", status: "Low Stock", items: 2 },
        { id: 3, name: "Bin 3", status: "In Stock", items: 9 },
        { id: 4, name: "Bin 4", status: "In Stock", items: 11 },
      ],
    },
    {
      id: 4,
      name: "Rack C-1",
      location: "City General Hospital - Surgery Suite 1",
      description: "General surgical supplies",
      totalBins: 12,
      status: "Active",
      bins: [
        { id: 1, name: "Bin 1", status: "In Stock", items: 14 },
        { id: 2, name: "Bin 2", status: "In Stock", items: 8 },
        { id: 3, name: "Bin 3", status: "In Stock", items: 6 },
      ],
    },
    {
      id: 5,
      name: "Rack D-1",
      location: "University Hospital - Teaching OR 1",
      description: "Teaching supplies and equipment",
      totalBins: 9,
      status: "Maintenance",
      bins: [
        { id: 1, name: "Bin 1", status: "In Stock", items: 7 },
        { id: 2, name: "Bin 2", status: "Low Stock", items: 3 },
      ],
    },
    {
      id: 6,
      name: "Rack E-1",
      location: "Central Hospital - Recovery Room 1",
      description: "Recovery supplies",
      totalBins: 5,
      status: "Active",
      bins: [
        { id: 1, name: "Bin 1", status: "In Stock", items: 9 },
        { id: 2, name: "Bin 2", status: "In Stock", items: 11 },
        { id: 3, name: "Bin 3", status: "Low Stock", items: 2 },
      ],
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterLocation, setFilterLocation] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [selectedRack, setSelectedRack] = useState(null)
  const [selectedBin, setSelectedBin] = useState(null)
  const [cart, setCart] = useState([])

  // Get unique locations for filter dropdown
  const locations = [...new Set(racks.map((rack) => rack.location))]

  // Filter racks based on search term and filters
  const filteredRacks = racks.filter((rack) => {
    const matchesSearch =
      rack.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rack.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = filterLocation === "" || rack.location === filterLocation
    const matchesStatus = filterStatus === "" || rack.status === filterStatus

    return matchesSearch && matchesLocation && matchesStatus
  })

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("surgicalCart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("surgicalCart", JSON.stringify(cart))
  }, [cart])

  // Handle rack selection
  const handleRackClick = (rack) => {
    setSelectedRack(rack)
    setSelectedBin(null)
  }

  // Handle bin selection
  const handleBinClick = (bin) => {
    setSelectedBin(bin)
  }

  // Handle back button click
  const handleBackClick = () => {
    if (selectedBin) {
      setSelectedBin(null)
    } else if (selectedRack) {
      setSelectedRack(null)
    }
  }

  // Add item to cart
  const addToCart = (item) => {
    const newItem = {
      id: Date.now(), // Using timestamp as a simple unique ID
      name: `${item.name} from ${selectedRack.name}`,
      quantity: 1,
      location: selectedRack.location,
    }

    setCart([...cart, newItem])
    alert(`Added ${newItem.name} to cart!`)
  }

  // Render bin details view
  const renderBinDetails = () => {
    if (!selectedBin) return null

    // Mock supplies data for the selected bin
    const supplies = [
      { id: 1, name: "Surgical Gloves", category: "Protection", quantity: 50 },
      { id: 2, name: "Scalpel Blades", category: "Surgical Tools", quantity: 20 },
      { id: 3, name: "Suture Kit", category: "Wound Care", quantity: 15 },
      { id: 4, name: "Surgical Masks", category: "Protection", quantity: 100 },
      { id: 5, name: "Sterile Gauze", category: "Wound Care", quantity: 30 },
    ]

    return (
      <div className="bin-details">
        <div className="bin-details-header">
          <button className="back-button" onClick={handleBackClick}>
            ← Back to Bins
          </button>
          <h2>
            {selectedBin.name} in {selectedRack.name}
          </h2>
          <div className={`bin-status ${selectedBin.status === "In Stock" ? "in-stock" : "low-stock"}`}>
            {selectedBin.status}
          </div>
        </div>

        <div className="bin-info">
          <p>
            <strong>Location:</strong> {selectedRack.location}
          </p>
          <p>
            <strong>Total Items:</strong> {selectedBin.items}
          </p>
        </div>

        <div className="supplies-section">
          <h3>Supplies in this Bin</h3>
          <table className="supplies-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map((supply) => (
                <tr key={supply.id}>
                  <td>{supply.name}</td>
                  <td>{supply.category}</td>
                  <td>{supply.quantity}</td>
                  <td>
                    <button className="add-to-cart-button" onClick={() => addToCart(supply)}>
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // Render rack details view
  const renderRackDetails = () => {
    if (!selectedRack) return null

    return (
      <div className="rack-details">
        <div className="rack-details-header">
          <button className="back-button" onClick={handleBackClick}>
            ← Back to Racks
          </button>
          <h2>{selectedRack.name}</h2>
          <div className={`rack-status ${selectedRack.status.toLowerCase()}`}>{selectedRack.status}</div>
        </div>

        <div className="rack-info">
          <p>
            <strong>Location:</strong> {selectedRack.location}
          </p>
          <p>
            <strong>Description:</strong> {selectedRack.description}
          </p>
          <p>
            <strong>Total Bins:</strong> {selectedRack.totalBins}
          </p>
        </div>

        {selectedBin ? (
          renderBinDetails()
        ) : (
          <div className="bins-section">
            <h3>Bins in this Rack</h3>
            <div className="bins-grid">
              {selectedRack.bins.map((bin) => (
                <div key={bin.id} className="bin-card" onClick={() => handleBinClick(bin)}>
                  <div className={`bin-status ${bin.status === "In Stock" ? "in-stock" : "low-stock"}`}>
                    {bin.status}
                  </div>
                  <h4>{bin.name}</h4>
                  <p>Items: {bin.items}</p>
                  <div className="bin-card-footer">
                    <span className="view-details">View Supplies →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Render racks list view
  const renderRacksList = () => {
    return (
      <>
        <div className="racks-header">
          <h1>Racks</h1>
          <div className="racks-actions">
            <div className="search-filter-container">
              <input
                type="text"
                placeholder="Search racks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />

              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="filter-select"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-select">
                <option value="">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="racks-grid">
          {filteredRacks.map((rack) => (
            <div key={rack.id} className="rack-card" onClick={() => handleRackClick(rack)}>
              <div className={`rack-status ${rack.status.toLowerCase()}`}>{rack.status}</div>
              <h2>{rack.name}</h2>
              <p className="rack-location">{rack.location}</p>
              <p className="rack-description">{rack.description}</p>
              <div className="rack-footer">
                <span className="bin-count">
                  <span className="bin-icon">📦</span> {rack.totalBins} Bins
                </span>
                <span className="view-details">View Details →</span>
              </div>
            </div>
          ))}
        </div>

        {filteredRacks.length === 0 && (
          <div className="no-results">
            <p>No racks found matching your search criteria.</p>
          </div>
        )}
      </>
    )
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="racks-content">{selectedRack ? renderRackDetails() : renderRacksList()}</div>
      </div>
    </div>
  )
}

export default Racks

