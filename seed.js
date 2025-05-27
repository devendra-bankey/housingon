import mongoose from "mongoose";
import Job from "./models/job";

await mongoose.connect("mongodb://localhost:27017/housingon"); // replace with your DB

const contractorId = new mongoose.Types.ObjectId(); // You can replace these with actual user IDs
const jobs = [
  {
    issue: "Leaking Pipe",
    subIssue: "Bathroom Tap Leak",
    completionDate: new Date("2025-06-10"),
    certExpiryDate: new Date("2026-06-10"),
    description: "Tap in tenant bathroom is leaking constantly.",
    assignedContractorId: contractorId,
    status: "1",
    priority: "high",
    tenant: {
      name: "Raj Mehta",
      phone: "9876543210",
      email: "raj@example.com",
    },
    contractor: {
      name: "Suresh Plumbing Co.",
      phone: "9988776655",
      email: "suresh@plumbing.com",
    },
    landlord: {
      name: "Amit Bansal",
      phone: "9090909090",
      email: "amit@landlord.com",
    },
    address: "101, Green Avenue, Delhi",
    attachments: [{ type: "image", url: "https://example.com/leak.jpg" }],
    preJobAttachments: [],
    postJobAttachments: [],
  },
  {
    issue: "Electrical Fault",
    subIssue: "Short Circuit in Kitchen",
    completionDate: new Date("2025-06-15"),
    certExpiryDate: null,
    description: "Tenant reports sparks from a socket.",
    assignedContractorId: contractorId,
    status: "2",
    priority: "medium",
    tenant: {
      name: "Neha Sharma",
      phone: "9998887776",
      email: "neha@example.com",
    },
    contractor: {
      name: "Bright Electricians",
      phone: "9876541230",
      email: "contact@brightelec.com",
    },
    landlord: {
      name: "Mr. Tyagi",
      phone: "8123456789",
      email: "tyagi@landlord.com",
    },
    address: "22, Sector 12, Noida",
    attachments: [],
    preJobAttachments: [
      { type: "pdf", url: "https://example.com/kitchen-fault.pdf" },
    ],
    postJobAttachments: [],
  },
  {
    issue: "Painting Required",
    subIssue: "Full House Painting",
    completionDate: new Date("2025-07-01"),
    description: "Tenant moving out, needs repainting as per contract.",
    assignedContractorId: contractorId,
    status: "3",
    priority: "low",
    tenant: {
      name: "Aditya Roy",
      phone: "8877665544",
      email: "aditya@example.com",
    },
    contractor: {
      name: "ColorWorks",
      phone: "9123456780",
      email: "support@colorworks.com",
    },
    landlord: {
      name: "Sunita Malhotra",
      phone: "7766554433",
      email: "sunita@landlord.com",
    },
    address: "Flat 7B, Park View Residency, Gurgaon",
    attachments: [],
    preJobAttachments: [],
    postJobAttachments: [
      { type: "image", url: "https://example.com/final-paint.jpg" },
    ],
  },
  {
    issue: "Pest Control",
    subIssue: "Termite Treatment",
    completionDate: new Date("2025-06-25"),
    certExpiryDate: new Date("2026-06-25"),
    description: "Tenant reported termite activity in wooden cupboard.",
    assignedContractorId: contractorId,
    status: "1",
    priority: "high",
    tenant: {
      name: "Priya Verma",
      phone: "8855443322",
      email: "priya@example.com",
    },
    contractor: {
      name: "NoMorePests",
      phone: "9911002200",
      email: "hello@nomorepests.com",
    },
    landlord: {
      name: "Manoj Khanna",
      phone: "9988776655",
      email: "manoj@landlord.com",
    },
    address: "Villa 23, Spring Meadows, Bangalore",
    attachments: [],
    preJobAttachments: [],
    postJobAttachments: [],
  },
  {
    issue: "Appliance Issue",
    subIssue: "AC Not Cooling",
    completionDate: new Date("2025-06-20"),
    description: "AC stopped cooling properly during peak heatwave.",
    assignedContractorId: contractorId,
    status: "4",
    priority: "medium",
    tenant: {
      name: "Kabir Singh",
      phone: "9090908080",
      email: "kabir@example.com",
    },
    contractor: {
      name: "CoolFix Solutions",
      phone: "8234567890",
      email: "help@coolfix.com",
    },
    landlord: {
      name: "Rakesh Tiwari",
      phone: "8080808080",
      email: "rakesh@landlord.com",
    },
    address: "3rd Floor, DLF Cyber City, Hyderabad",
    attachments: [],
    preJobAttachments: [
      { type: "video", url: "https://example.com/ac-issue.mp4" },
    ],
    postJobAttachments: [],
  },
];

await Job.insertMany(jobs);
console.log("5 demo jobs inserted.");
mongoose.disconnect();
