import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  // archiveProjectTool, // Commented out to prevent accidental changes
  createIssueTool,
  // createProjectTool, // Commented out to prevent accidental creation
  createTimeEntryTool,
  // createUserTool, // Commented out to prevent accidental creation
  // deleteIssueTool,
  // deleteProjectTool, // Commented out to prevent accidental deletion
  // deleteTimeEntryTool, // Commented out to prevent accidental deletion
  // deleteUserTool, // Commented out to prevent accidental deletion
  getCurrentUserTool,
  getIssueTool,
  getProjectTool,
  getTimeEntryTool,
  getUserTool,
  listIssuesTool,
  listProjectsTool,
  listTimeEntriesTool,
  listUsersTool,
  searchTool,
  // unarchiveProjectTool, // Commented out to prevent accidental changes
  updateIssueTool,
  // updateProjectTool, // Commented out to prevent accidental updates
  // updateTimeEntryTool, // Commented out to prevent accidental updates
  // updateUserTool, // Commented out to prevent accidental updates
  // Enumerations
  listIssuePrioritiesTool,
  listTimeEntryActivitiesTool,
  // Memberships
  listProjectMembershipsTool,
  getMembershipTool,
  // createProjectMembershipTool, // Commented out to prevent accidental creation
  // updateMembershipTool, // Commented out to prevent accidental updates
  // deleteMembershipTool, // Commented out to prevent accidental deletion
  // Issue Statuses
  listIssueStatusesTool,
  // Trackers
  listTrackersTool,
  // Issue Relations
  listIssueRelationsTool,
  // createIssueRelationTool, // Commented out to prevent accidental creation
  // deleteIssueRelationTool, // Commented out to prevent accidental deletion
  getIssueRelationTool,
  // Versions
  listVersionsTool,
  getVersionTool,
  // createVersionTool, // Commented out to prevent accidental creation
  // updateVersionTool, // Commented out to prevent accidental updates
  // deleteVersionTool, // Commented out to prevent accidental deletion
  // Wiki Pages
  listWikiPagesTool,
  getWikiPageTool,
  // createOrUpdateWikiPageTool, // Commented out to prevent accidental changes
  // deleteWikiPageTool, // Commented out to prevent accidental deletion
  // Queries
  listQueriesTool,
  // Files
  listFilesTool,
  // Roles
  listRolesTool,
  getRoleTool,
  // Groups
  listGroupsTool,
  getGroupTool,
  // createGroupTool, // Commented out to prevent accidental creation
  // updateGroupTool, // Commented out to prevent accidental updates
  // deleteGroupTool, // Commented out to prevent accidental deletion
  // addUserToGroupTool, // Commented out to prevent accidental changes
  // removeUserFromGroupTool, // Commented out to prevent accidental changes
  // Custom Fields
  listCustomFieldsTool,
  // My Account
  getMyAccountTool,
  // Issue Categories
  listIssueCategoriesTool,
  // createIssueCategoryTool, // Commented out to prevent accidental creation
  getIssueCategoryTool,
  // updateIssueCategoryTool, // Commented out to prevent accidental updates
  // deleteIssueCategoryTool, // Commented out to prevent accidental deletion
  // Attachments
  getAttachmentTool,
  // deleteAttachmentTool, // Commented out to prevent accidental deletion
  // uploadAttachmentTool, // Commented out to prevent accidental uploads
} from "./tools";

export const server = new McpServer({
  name: "mcp-for-redmine",
  version: "0.1.3",
});

// User Tools
// server.registerTool(createUserTool.name, createUserTool.config, createUserTool.execute); // Commented out to prevent accidental creation
server.registerTool(getUserTool.name, getUserTool.config, getUserTool.execute);
server.registerTool(getCurrentUserTool.name, getCurrentUserTool.config, getCurrentUserTool.execute);
server.registerTool(listUsersTool.name, listUsersTool.config, listUsersTool.execute);
// server.registerTool(updateUserTool.name, updateUserTool.config, updateUserTool.execute); // Commented out to prevent accidental updates
// server.registerTool(deleteUserTool.name, deleteUserTool.config, deleteUserTool.execute); // Commented out to prevent accidental deletion

// Project Tools
server.registerTool(listProjectsTool.name, listProjectsTool.config, listProjectsTool.execute);
server.registerTool(getProjectTool.name, getProjectTool.config, getProjectTool.execute);
// server.registerTool(createProjectTool.name, createProjectTool.config, createProjectTool.execute); // Commented out to prevent accidental creation
// server.registerTool(updateProjectTool.name, updateProjectTool.config, updateProjectTool.execute); // Commented out to prevent accidental updates
// server.registerTool(archiveProjectTool.name, archiveProjectTool.config, archiveProjectTool.execute); // Commented out to prevent accidental changes
// server.registerTool(
//   unarchiveProjectTool.name,
//   unarchiveProjectTool.config,
//   unarchiveProjectTool.execute
// ); // Commented out to prevent accidental changes
// server.registerTool(deleteProjectTool.name, deleteProjectTool.config, deleteProjectTool.execute); // Commented out to prevent accidental deletion

// Issue Tools
server.registerTool(listIssuesTool.name, listIssuesTool.config, listIssuesTool.execute);
server.registerTool(getIssueTool.name, getIssueTool.config, getIssueTool.execute);
server.registerTool(createIssueTool.name, createIssueTool.config, createIssueTool.execute);
server.registerTool(updateIssueTool.name, updateIssueTool.config, updateIssueTool.execute);
// server.registerTool(deleteIssueTool.name, deleteIssueTool.config, deleteIssueTool.execute);

// Time Entry Tools
server.registerTool(
  listTimeEntriesTool.name,
  listTimeEntriesTool.config,
  listTimeEntriesTool.execute
);
server.registerTool(getTimeEntryTool.name, getTimeEntryTool.config, getTimeEntryTool.execute);
server.registerTool(
  createTimeEntryTool.name,
  createTimeEntryTool.config,
  createTimeEntryTool.execute
);
// server.registerTool(
//   updateTimeEntryTool.name,
//   updateTimeEntryTool.config,
//   updateTimeEntryTool.execute
// ); // Commented out to prevent accidental updates
// server.registerTool(
//   deleteTimeEntryTool.name,
//   deleteTimeEntryTool.config,
//   deleteTimeEntryTool.execute
// ); // Commented out to prevent accidental deletion
// Membership Tools (Alpha)
server.registerTool(
  listProjectMembershipsTool.name,
  listProjectMembershipsTool.config,
  listProjectMembershipsTool.execute
);
server.registerTool(getMembershipTool.name, getMembershipTool.config, getMembershipTool.execute);
// server.registerTool(
//   createProjectMembershipTool.name,
//   createProjectMembershipTool.config,
//   createProjectMembershipTool.execute
// ); // Commented out to prevent accidental creation
// server.registerTool(
//   updateMembershipTool.name,
//   updateMembershipTool.config,
//   updateMembershipTool.execute
// ); // Commented out to prevent accidental updates
// server.registerTool(
//   deleteMembershipTool.name,
//   deleteMembershipTool.config,
//   deleteMembershipTool.execute
// ); // Commented out to prevent accidental deletion

// Issue Relation Tools (Alpha)
server.registerTool(
  listIssueRelationsTool.name,
  listIssueRelationsTool.config,
  listIssueRelationsTool.execute
);
// server.registerTool(
//   createIssueRelationTool.name,
//   createIssueRelationTool.config,
//   createIssueRelationTool.execute
// ); // Commented out to prevent accidental creation
// server.registerTool(
//   deleteIssueRelationTool.name,
//   deleteIssueRelationTool.config,
//   deleteIssueRelationTool.execute
// ); // Commented out to prevent accidental deletion
server.registerTool(
  getIssueRelationTool.name,
  getIssueRelationTool.config,
  getIssueRelationTool.execute
);

// Version Tools (Alpha)
server.registerTool(listVersionsTool.name, listVersionsTool.config, listVersionsTool.execute);
server.registerTool(getVersionTool.name, getVersionTool.config, getVersionTool.execute);
// server.registerTool(createVersionTool.name, createVersionTool.config, createVersionTool.execute); // Commented out to prevent accidental creation
// server.registerTool(updateVersionTool.name, updateVersionTool.config, updateVersionTool.execute); // Commented out to prevent accidental updates
// server.registerTool(deleteVersionTool.name, deleteVersionTool.config, deleteVersionTool.execute); // Commented out to prevent accidental deletion

// Wiki Page Tools (Alpha)
server.registerTool(listWikiPagesTool.name, listWikiPagesTool.config, listWikiPagesTool.execute);
server.registerTool(getWikiPageTool.name, getWikiPageTool.config, getWikiPageTool.execute);
// server.registerTool(
//   createOrUpdateWikiPageTool.name,
//   createOrUpdateWikiPageTool.config,
//   createOrUpdateWikiPageTool.execute
// ); // Commented out to prevent accidental changes
// server.registerTool(deleteWikiPageTool.name, deleteWikiPageTool.config, deleteWikiPageTool.execute); // Commented out to prevent accidental deletion

// Query Tools (Alpha)
server.registerTool(listQueriesTool.name, listQueriesTool.config, listQueriesTool.execute);

// Issue Status Tools (Alpha)
server.registerTool(
  listIssueStatusesTool.name,
  listIssueStatusesTool.config,
  listIssueStatusesTool.execute
);

// Tracker Tools (Alpha)
server.registerTool(listTrackersTool.name, listTrackersTool.config, listTrackersTool.execute);

// Enumeration Tools (Alpha)
server.registerTool(
  listIssuePrioritiesTool.name,
  listIssuePrioritiesTool.config,
  listIssuePrioritiesTool.execute
);
server.registerTool(
  listTimeEntryActivitiesTool.name,
  listTimeEntryActivitiesTool.config,
  listTimeEntryActivitiesTool.execute
);

// Issue Category Tools (Alpha)
server.registerTool(
  listIssueCategoriesTool.name,
  listIssueCategoriesTool.config,
  listIssueCategoriesTool.execute
);
// server.registerTool(
//   createIssueCategoryTool.name,
//   createIssueCategoryTool.config,
//   createIssueCategoryTool.execute
// ); // Commented out to prevent accidental creation
server.registerTool(
  getIssueCategoryTool.name,
  getIssueCategoryTool.config,
  getIssueCategoryTool.execute
);
// server.registerTool(
//   updateIssueCategoryTool.name,
//   updateIssueCategoryTool.config,
//   updateIssueCategoryTool.execute
// ); // Commented out to prevent accidental updates
// server.registerTool(
//   deleteIssueCategoryTool.name,
//   deleteIssueCategoryTool.config,
//   deleteIssueCategoryTool.execute
// ); // Commented out to prevent accidental deletion

// Role Tools (Alpha)
server.registerTool(listRolesTool.name, listRolesTool.config, listRolesTool.execute);
server.registerTool(getRoleTool.name, getRoleTool.config, getRoleTool.execute);

// Group Tools (Alpha)
server.registerTool(listGroupsTool.name, listGroupsTool.config, listGroupsTool.execute);
server.registerTool(getGroupTool.name, getGroupTool.config, getGroupTool.execute);
// server.registerTool(createGroupTool.name, createGroupTool.config, createGroupTool.execute); // Commented out to prevent accidental creation
// server.registerTool(updateGroupTool.name, updateGroupTool.config, updateGroupTool.execute); // Commented out to prevent accidental updates
// server.registerTool(deleteGroupTool.name, deleteGroupTool.config, deleteGroupTool.execute); // Commented out to prevent accidental deletion
// server.registerTool(addUserToGroupTool.name, addUserToGroupTool.config, addUserToGroupTool.execute); // Commented out to prevent accidental changes
// server.registerTool(
//   removeUserFromGroupTool.name,
//   removeUserFromGroupTool.config,
//   removeUserFromGroupTool.execute
// ); // Commented out to prevent accidental changes

// Custom Field Tools (Alpha)
server.registerTool(
  listCustomFieldsTool.name,
  listCustomFieldsTool.config,
  listCustomFieldsTool.execute
);

// Search Tools
server.registerTool(searchTool.name, searchTool.config, searchTool.execute);

// File Tools (Alpha)
server.registerTool(listFilesTool.name, listFilesTool.config, listFilesTool.execute);

// My Account Tools (Alpha)
server.registerTool(getMyAccountTool.name, getMyAccountTool.config, getMyAccountTool.execute);

// Attachment Tools (Alpha)
server.registerTool(getAttachmentTool.name, getAttachmentTool.config, getAttachmentTool.execute);
// server.registerTool(
//   deleteAttachmentTool.name,
//   deleteAttachmentTool.config,
//   deleteAttachmentTool.execute
// ); // Commented out to prevent accidental deletion
// server.registerTool(
//   uploadAttachmentTool.name,
//   uploadAttachmentTool.config,
//   uploadAttachmentTool.execute
// ); // Commented out to prevent accidental uploads
