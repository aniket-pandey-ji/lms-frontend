# ER Diagram
```mermaid
erDiagram
  User ||--o{ Post : creates
  User ||--o{ Resource : uploads
  User ||--o{ Comment : writes
  Community ||--o{ Post : contains
  Community ||--o{ Resource : contains
  Post ||--o{ Comment : has
  Chat ||--o{ Message : contains
  User }o--o{ Chat : participates
  StudyGroup }o--o{ User : members
  CodingContest ||--o{ Achievement : awards
```
