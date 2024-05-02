import useApi from '../hooks/useApi'

export class UsersApiService {
  constructor() {
    this.apiMehods = useApi('/users');
  }

  async getUsers() {
    return await this.apiMehods.getObjects();
  }

  async getUserById(id) {
    return await this.apiMehods.getObjectById(id);
  }

  async publishUser(post){
    return await this.apiMehods.postObject(post);
  }

  async editUser(post){
    return await this.apiMehods.putObject(post.id,post);
  }

  async deleteUser(id){
    return await this.apiMehods.deleteObjectById(id);
  }

}
