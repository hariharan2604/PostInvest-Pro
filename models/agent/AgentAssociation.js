import Agent from "./Agent.js";
import Credentials from "./Credentials.js";

Credentials.belongsTo(Agent, { foreignKey: 'agent_id' });
export { Agent, Credentials }