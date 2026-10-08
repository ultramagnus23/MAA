// Handbooks are listed separately from the other resources.
// Every `url` is a Google Drive link.

export type HandbookGroup = "Department" | "Student" | "Batch";

export type Handbook = {
  title: string;
  group: HandbookGroup;
  url: string;
  year?: string;
};

export const handbooks: Handbook[] = [
  { title: "Biology", group: "Department", year: "2024", url: "https://drive.google.com/file/d/14_QIFXSGpDnvlavyi_12SLabq6vvnHVO/view" },
  { title: "Chemistry", group: "Department", year: "2024–25", url: "https://drive.google.com/file/d/162BKShsiCLgytPhW5Sbl44IH4AetDEii/view" },
  { title: "Computer Science", group: "Department", year: "Nov 2024", url: "https://drive.google.com/file/d/1tXHF1DR6wQZeuPJNOTd-ZUwuFkMDsD_y/view" },
  { title: "Creative Writing", group: "Department", year: "2025–26", url: "https://drive.google.com/file/d/1NkahEI4Y5NfqjjZZHsuM-W3_gNFd5z5i/view" },
  { title: "Economics (UG)", group: "Department", year: "2025–26", url: "https://drive.google.com/file/d/15357pnN9bU7mDk7s3XArdHDEF2GAf0s3/view" },
  { title: "English (UG)", group: "Department", url: "https://drive.google.com/file/d/1QBzqZ9C57AxKNNlwbNT0fFj2hmeS8SEl/view" },
  { title: "Entrepreneurship", group: "Department", url: "https://drive.google.com/file/d/1_4K54_zgv0HlXzxJw5BtzVFGBJaFsqcY/view" },
  { title: "Environmental Studies", group: "Department", year: "2024–25", url: "https://drive.google.com/file/d/1dfOz4NBGqA7CdEMPf3Bc21cMhbo-5Peo/view" },
  { title: "History", group: "Department", year: "2025", url: "https://drive.google.com/file/d/1zXb1Ewo40l6gwIgxIL5ybSeaP3ctfQ2t/view" },
  { title: "International Relations", group: "Department", url: "https://drive.google.com/file/d/1_xXUZcz3l_8oam3-C9LLTGPtyAnAwL6H/view" },
  { title: "Mathematics", group: "Department", year: "2024–25", url: "https://drive.google.com/file/d/1XnpE1BtXXOps93PdXIA9A5dhQbo4Ez2F/view" },
  { title: "Media Studies", group: "Department", year: "2024–25", url: "https://drive.google.com/file/d/19uDM3ZQ_8umNvW-PY24_xEjjPrQIuvM1/view" },
  { title: "Performing Arts", group: "Department", year: "2024–25", url: "https://drive.google.com/file/d/1IdmzreVUDqHQOLsPzh_H2kmK1jURR_q_/view" },
  { title: "Philosophy", group: "Department", year: "2024–25", url: "https://drive.google.com/file/d/1tyjjLRDxXpS5t2l5CB91W6NKtuFMjX3v/view" },
  { title: "Physics", group: "Department", year: "2024", url: "https://drive.google.com/file/d/1W6I5r5NO2CXRwESoTKbzB16J2x1cvJL0/view" },
  { title: "Political Science", group: "Department", year: "2025", url: "https://drive.google.com/file/d/1GFAkSyTHg72JDUUgHd674SbiP4jKxB3h/view" },
  { title: "Politics, Philosophy and Economics (PPE)", group: "Department", year: "2024–25", url: "https://docs.google.com/document/d/1FNRWgpwGV1-uQEPI4ZfN3Z6pexfWnUzq6_O7BZKr4W0/edit" },
  { title: "Psychology (NEP compliant)", group: "Department", year: "2025", url: "https://drive.google.com/file/d/1Yx98RM3yFZXm-M3nHxkAWnxXHVdppJNL/view" },
  { title: "Psychology and Cognitive Sciences (UG and MLS)", group: "Department", year: "Aug 2026", url: "https://drive.google.com/file/d/1hUxweonVTthIflk2CubpmIaptDv-x_Df/view" },
  { title: "Sociology and Anthropology", group: "Department", year: "2025", url: "https://drive.google.com/file/d/1OTXknPP73zwlhE9FhDM4OwTCIi9MNxvZ/view" },
  { title: "Visual Arts", group: "Department", year: "2024–25", url: "https://drive.google.com/file/d/1jwvVrHz35LPxfMgqj756ZlXo-Rs6OssW/view" },
  { title: "ASP25 Handbook", group: "Student", url: "https://drive.google.com/file/d/1NtvwQkKQU5F1VSHZ6f9xGpuuxkZwrHga/view" },
  { title: "MLS Handbook", group: "Student", url: "https://drive.google.com/file/d/1y9q2yM-UMGFOZW2TwUWH0m1TPH05OKZg/view" },
  { title: "UG2026 Student Handbook", group: "Batch", url: "https://drive.google.com/file/d/1BUrjaQxzGUJfpc73RC1GkTSivg4jOv9Y/view" },
  { title: "UG2025/29 Handbook", group: "Batch", url: "https://drive.google.com/file/d/1RjkJlXq5nbdmKOmpLoGOkOjZPiS_e91S/view" },
  { title: "UG2024/28 Handbook", group: "Batch", url: "https://drive.google.com/file/d/15pPBMj1ho8lxVF2eNBKahdAQSYGcEnnM/view" },
  { title: "UG2023/27 Handbook", group: "Batch", url: "https://drive.google.com/file/d/1iyJaakk1e3ixSKMhh4Y0iv_G8e4c1nTA/view" },
  { title: "UG2022/25/26 Handbook", group: "Batch", url: "https://drive.google.com/file/d/1aExqRcm_sTdQ051cMnU-CGmNdP7BicsA/view" },
  { title: "Course Registration 101", group: "Batch", url: "https://drive.google.com/file/d/1GfGbr-tq49xnA9YoNebZbO0Nqxlgh5I-/view" },
];

export const handbookGroups: { id: HandbookGroup; label: string; blurb: string }[] = [
  { id: "Department", label: "Department handbooks", blurb: "Course requirements and guidelines for each department." },
  { id: "Student", label: "Student handbooks", blurb: "Handbooks for specific programmes." },
  { id: "Batch", label: "Batch handbooks", blurb: "Handbooks for each batch, and the course registration guide." },
];
