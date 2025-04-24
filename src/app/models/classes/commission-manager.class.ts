/** Commission handler class
 * Utility functions for commission class objects
*/
import { Commission } from './commission.class';

export class ComssionHandler{
    /** Generates a mock commission with placeholder data */
    getMock(){
        let commission = new Commission(
            'Doug Dimmadome',
            'Mock commission',
            new Date(),
            'open'
        );
        return commission;
    }
}