const { db } = require("@vercel/postgres");
const {projects} = require("../app/lib/placeholder_data.ts");

async function SeedProjects(project) {
  try {
    await project.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createProjectTable = project.sql`
    CREATE TABLE IF NOT EXISTS project(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255),
        description TEXT,
        photo_url VARCHAR(255),
        project_code VARCHAR(255),
        project_url VARCHAR(255),
        type VARCHAR(50),
        logoUrld TEXT[]
    )`;

    console.log(`Created "project" table`);

    const insertedProjects = await Promise.all(
      projects.map((el, i) => {
        return project.sql`
            INSERT INTO project (name,description,photo_url,project_code,project_url,type,logoUrld)
            VALUES(${el.name},${el.description},${el.photoUrl},${el.projectCode},${el.projectUrl},${el.type},${el.logoUrld})
            ON CONFLICT (id) DO NOTHING;
            `;
      })
    );

    console.log(`Inserted projects ${insertedProjects.length} in DB`);
    return {
      createProjectTable,
      projects: insertedProjects,
    };
  } catch (error) {
    console.error("Error seeding projects:", error);
    throw error;
  }
}

async function main() {
  const project = await db.connect();

  await SeedProjects(project);
  // await SeedProjectsType(project);

  await project.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
