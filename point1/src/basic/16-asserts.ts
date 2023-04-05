type User3 = {
  name: string;
  displayName: string | null;
};
function assertDisplayName(
  user: User3
): asserts user is User3 & { displayName: string } {
  if (!user.displayName) throw new Error('User has no displayName field');
}
function logUserByDisplayName(user: User3) {
  assertDisplayName(user);
  console.log(user.displayName.toLowerCase());
}
