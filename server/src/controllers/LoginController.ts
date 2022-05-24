import { Request, Response, Router, NextFunction } from 'express';
import { get } from './decorators/routes';

@controller('/')
class LoginController {
  @(this.getLogin('/login'))
  getLogin(req: Request, res: Response): void {
    res.send(`
            <form method="POST"> 
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
  }
}
