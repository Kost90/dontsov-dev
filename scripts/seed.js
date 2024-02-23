const { db } = require("@vercel/postgres");
const { projects } = require("../app/lib/placeholder_data");

async function SeedProjects(project) {
  try {
    await project.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createProjectTable = project.sql`
    CREATE TABLE IF NOT EXIST project(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255),
        description TEXT,
        photo_url VARCHAR(255),
        project_code VARCHAR(255),
        project_url VARCHAR(255),
        type_id INT,
        FOREIGN KEY (type_id) REFERENCES projectType(type_id)
    )`;

    console.log(`Created "project" table`);

    const insertedProjects = Promise.all(
      projects.map((el) => {
        return project.sql`
            INSERT INTO project (name,description,photo_url,project_code,project_url)
            VALUES(${el.name},${el.description},${el.photoUrl},${el.projectCode},${el.projectUrl})
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

async function SeedProjectsType(project) {
  try {
    await project.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTypeTable = project.sql`
        CREATE TABLE IF NOT EXIST projectType(
            type_id INT PRIMARY KEY,
            type VARCHAR(50),
            logo_url VARCHAR(255)
        )
        `;

    console.log(`Created "projectType" table`);

    const insertTypes = Promise.all(
      projects.map((el) => {
        return project.sql`
                INSERT INTO projectType(type)
                VALUES(${el.type})
                `;
      })
    );

    console.log(`Inserted types ${insertTypes.length} in DB`);
    return {
      createTypeTable,
      projects: insertTypes,
    };
  } catch (error) {
    console.error("Error seeding types:", error);
    throw error;
  }
}

async function main() {
  const project = await db.connect();

  await SeedProjects(project);
  await SeedProjectsType(project);

  await project.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
