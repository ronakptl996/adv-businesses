import { useState } from "react";
import "./App.css";
import PremiumBusinesses from "./components/PremiumBusinesses/PremiumBusinesses";
import FreeBusinesses from "./components/FreeBusinesses/FreeBusinesses";
import EliteBusinesses from "./components/EliteBusinesses/EliteBusinesses";
import Jobs from "./Pages/Jobs";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data structure - replace with your actual data
  const businesses = [
    {
      id: 1,
      businessOwner: "John Doe",
      businessName: "Luxury Hotel",
      businessContact: "+1 234 567 890",
      businessEmail: "contact@luxuryhotel.com",
      businessAddress: "123 Luxury Street, City",
      businessLogo:
        "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessVisitingCard: "https://example.com/card.jpg",
      provideServices: ["Luxury Rooms", "Fine Dining", "Spa Services"],
      openingHours: "24/7",
      businessWebsite: "www.luxuryhotel.com",
      businessInstagramUsername: "@luxuryhotel",
      businessTwitterUsername: "@luxuryhotel",
      businessFacebookUsername: "luxuryhotel",
      quickInfo: "5-star luxury accommodation",
      detailedInfo:
        "Experience unparalleled luxury with our premium services...",
      yearOfEstablishment: "1995",
      businessCategory: "Hospitality",
      packageType: "platinum",
    },
    {
      id: 2,
      businessOwner: "John Doe",
      businessName: "Luxury Hotel",
      businessContact: "+1 234 567 890",
      businessEmail: "contact@luxuryhotel.com",
      businessAddress: "123 Luxury Street, City",
      businessLogo:
        "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessVisitingCard: "https://example.com/card.jpg",
      provideServices: ["Luxury Rooms", "Fine Dining", "Spa Services"],
      openingHours: "24/7",
      businessWebsite: "www.luxuryhotel.com",
      businessInstagramUsername: "@luxuryhotel",
      businessTwitterUsername: "@luxuryhotel",
      businessFacebookUsername: "luxuryhotel",
      quickInfo: "5-star luxury accommodation",
      detailedInfo:
        "Experience unparalleled luxury with our premium services...",
      yearOfEstablishment: "1995",
      businessCategory: "Hospitality",
      packageType: "platinum",
    },
    // Free Businesses
    {
      id: 2,
      businessName: "Local Bakery",
      businessContact: "+1 234 567 891",
      businessEmail: "contact@localbakery.com",
      businessAddress: "456 Main Street, City",
      businessVisitingCard:
        "https://images.pexels.com/photos/6940977/pexels-photo-6940977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessCategory: "Food & Beverage",
      packageType: "FREE",
    },
    {
      id: 3,
      businessName: "Neighborhood Grocery",
      businessContact: "+1 234 567 892",
      businessEmail: "info@neighborhoodgrocery.com",
      businessAddress: "789 Market Street, City",
      businessVisitingCard:
        "https://images.pexels.com/photos/6940985/pexels-photo-6940985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessCategory: "Retail",
      packageType: "FREE",
    },
    {
      id: 4,
      businessName: "Family Restaurant",
      businessContact: "+1 234 567 893",
      businessEmail: "dine@familyrestaurant.com",
      businessAddress: "321 Food Court, City",
      businessVisitingCard:
        "https://images.pexels.com/photos/6940990/pexels-photo-6940990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessCategory: "Restaurant",
      packageType: "FREE",
    },
    {
      id: 5,
      businessName: "Local Pharmacy",
      businessContact: "+1 234 567 894",
      businessEmail: "pharmacy@localhealth.com",
      businessAddress: "654 Health Street, City",
      businessVisitingCard:
        "https://images.pexels.com/photos/6940995/pexels-photo-6940995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessCategory: "Healthcare",
      packageType: "FREE",
    },
    {
      id: 6,
      businessName: "Tech Solutions",
      businessContact: "+1 234 567 895",
      businessEmail: "info@techsolutions.com",
      businessAddress: "789 Tech Park, City",
      businessLogo:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessVisitingCard:
        "https://images.pexels.com/photos/6941000/pexels-photo-6941000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      provideServices: ["Web Development", "Mobile Apps", "Cloud Solutions"],
      openingHours: "9:00 AM - 6:00 PM",
      quickInfo: "Leading IT Solutions Provider",
      businessCategory: "Information Technology",
      packageType: "ELITE",
    },
    {
      id: 7,
      businessName: "Fitness Center",
      businessContact: "+1 234 567 896",
      businessEmail: "fitness@healthcenter.com",
      businessAddress: "456 Fitness Street, City",
      businessLogo:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      businessVisitingCard:
        "https://images.pexels.com/photos/6941005/pexels-photo-6941005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      provideServices: [
        "Personal Training",
        "Group Classes",
        "Nutrition Planning",
      ],
      openingHours: "6:00 AM - 10:00 PM",
      quickInfo: "Your Path to Better Health",
      businessCategory: "Health & Fitness",
      packageType: "ELITE",
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Featured Businesses</h1>
      </header>
      <main>
        {/* <PremiumBusinesses businesses={businesses} />
        <EliteBusinesses businesses={businesses} />
        <FreeBusinesses businesses={businesses} /> */}

        <Jobs />
      </main>
    </div>
  );
}

export default App;
