import { Dashboard } from "./pageobjects/dashboardpage"

const dashboard = new Dashboard()

export class Common {
  navigateToAdminPanel(panelName) {
    dashboard.getSideBarMenu().contains(panelName).click()
    dashboard
      .getSideBarMenu()
      .contains(panelName)
      .parent()
      .should("have.class", "oxd-main-menu-item active")
  }
}
